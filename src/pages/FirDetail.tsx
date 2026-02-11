import { useParams, Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { StatusTimeline } from '@/components/fir/StatusTimeline';
import { CaseNotes } from '@/components/fir/CaseNotes';
import { getFirById, getFirNotes, getFirStatusHistory, FirStatus } from '@/data/mockFirData';
import { format } from 'date-fns';
import { 
  ArrowLeft, 
  FileText, 
  Calendar, 
  MapPin, 
  User, 
  Users, 
  AlertCircle,
  Scale
} from 'lucide-react';

const statusBadgeColors: Record<FirStatus, string> = {
  filed: 'bg-status-filed text-status-filed-foreground',
  ongoing: 'bg-status-ongoing text-status-ongoing-foreground',
  closed: 'bg-status-closed text-status-closed-foreground',
};

const FirDetail = () => {
  const { id } = useParams<{ id: string }>();
  const fir = id ? getFirById(id) : undefined;
  const notes = id ? getFirNotes(id) : [];
  const statusHistory = id ? getFirStatusHistory(id) : [];

  if (!fir) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center py-16">
          <AlertCircle className="w-16 h-16 text-muted-foreground mb-4" />
          <h2 className="text-2xl font-bold text-foreground mb-2">FIR Not Found</h2>
          <p className="text-muted-foreground mb-6">The requested FIR could not be found.</p>
          <Button asChild>
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="space-y-6">
        {/* Back Button */}
        <Button variant="outline" asChild>
          <Link to="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Link>
        </Button>

        {/* FIR Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <FileText className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">{fir.firNumber}</h2>
            </div>
            <p className="text-muted-foreground mt-1">{fir.policeStation}</p>
          </div>
          <Badge className={`${statusBadgeColors[fir.status]} text-sm px-4 py-1 capitalize`}>
            {fir.status}
          </Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main FIR Information */}
          <div className="lg:col-span-2 space-y-6">
            {/* FIR Details Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="w-5 h-5" />
                  FIR Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Date Filed</p>
                      <p className="text-foreground">{format(new Date(fir.dateFiled), 'dd MMMM yyyy')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Police Station</p>
                      <p className="text-foreground">{fir.policeStation}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">Section / IPC</p>
                  <Badge variant="outline" className="text-sm">
                    {fir.sectionIpc}
                  </Badge>
                </div>

                <Separator />

                {/* Complainant Details */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <User className="w-5 h-5 text-muted-foreground" />
                    <h4 className="font-semibold text-foreground">Complainant Details</h4>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="font-medium text-foreground">{fir.complainantName}</p>
                    <p className="text-sm text-muted-foreground mt-1">{fir.complainantDetails}</p>
                  </div>
                </div>

                {/* Accused Details */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="w-5 h-5 text-muted-foreground" />
                    <h4 className="font-semibold text-foreground">Accused Details</h4>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm text-foreground">{fir.accusedDetails}</p>
                  </div>
                </div>

                <Separator />

                {/* Incident Description */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Incident Description</h4>
                  <p className="text-foreground/80 leading-relaxed">{fir.incidentDescription}</p>
                </div>
              </CardContent>
            </Card>

            {/* Case Notes */}
            <Card>
              <CardHeader>
                <CardTitle>Case Updates & Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <CaseNotes notes={notes} />
              </CardContent>
            </Card>
          </div>

          {/* Status Timeline Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle>Status Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <StatusTimeline fir={fir} statusHistory={statusHistory} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FirDetail;
