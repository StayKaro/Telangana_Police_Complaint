import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { complaints, officers } from '@/data/mockStationData';
import { FileText, MessageSquare, Send } from 'lucide-react';
import { format } from 'date-fns';

const statusStyles = {
  new: 'bg-status-filed text-status-filed-foreground',
  allotted: 'bg-status-ongoing text-status-ongoing-foreground',
  sent: 'bg-status-closed text-status-closed-foreground',
};

const ipcSections = [
  'IPC 379 - Theft',
  'IPC 420 - Cheating',
  'IPC 323 - Assault',
  'IPC 406 - Criminal Breach of Trust',
  'IPC 304A - Causing Death by Negligence',
];

const Complaints = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Complaints</h2>
          <p className="text-muted-foreground">
            WhatsApp bot complaints are converted into official letters for review and section allotment.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {complaints.map((complaint) => (
            <Card key={complaint.id}>
              <CardHeader className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-1">
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5" />
                    {complaint.referenceNo}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Received {format(new Date(complaint.receivedAt), 'dd MMM yyyy, hh:mm a')} • {complaint.policeStation}
                  </p>
                </div>
                <Badge className={`${statusStyles[complaint.status]} capitalize`}>
                  {complaint.status}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Complainant</p>
                    <p className="text-foreground">{complaint.complainantName}</p>
                    <p className="text-sm text-muted-foreground">{complaint.contactNumber}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Incident Location</p>
                    <p className="text-foreground">{complaint.incidentLocation}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Summary</p>
                    <p className="text-foreground">{complaint.summary}</p>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                    <FileText className="w-4 h-4" />
                    Complaint Letter
                  </div>
                  <div className="whitespace-pre-line rounded-lg border bg-muted/40 p-4 text-sm text-foreground/80">
                    {complaint.letter}
                  </div>
                </div>

                <Separator />

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">Allot Section</p>
                    <Select defaultValue={complaint.allottedSection}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select IPC section" />
                      </SelectTrigger>
                      <SelectContent>
                        {ipcSections.map((section) => (
                          <SelectItem key={section} value={section}>
                            {section}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">Assign Officer</p>
                    <Select defaultValue={complaint.assignedOfficer}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select officer" />
                      </SelectTrigger>
                      <SelectContent>
                        {officers.map((officer) => (
                          <SelectItem key={officer.id} value={officer.name}>
                            {officer.name} • {officer.policeStation}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-end">
                    <Button className="w-full">
                      <Send className="w-4 h-4 mr-2" />
                      Send to FIR Management
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Complaints;
