import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { incomingFirRequests } from '@/data/mockStationData';
import { mockFirs } from '@/data/mockFirData';
import { FileText, Inbox, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

const statusStyles = {
  pending: 'bg-status-filed text-status-filed-foreground',
  accepted: 'bg-status-ongoing text-status-ongoing-foreground',
};

const firStatusStyles = {
  filed: 'bg-status-filed text-status-filed-foreground',
  ongoing: 'bg-status-ongoing text-status-ongoing-foreground',
  closed: 'bg-status-closed text-status-closed-foreground',
};

const FirManagement = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground">FIR Management</h2>
          <p className="text-muted-foreground">
            Review complaints sent from WhatsApp bot, assign them to officers, and manage active FIRs.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Inbox className="w-5 h-5" />
              Incoming From Complaints
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {incomingFirRequests.map((request) => (
              <div key={request.id} className="flex flex-col gap-3 rounded-lg border p-4 md:flex-row md:items-center md:justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">{request.firDraftNo}</p>
                  <p className="text-foreground font-medium">{request.policeStation}</p>
                  <p className="text-sm text-muted-foreground">
                    Section: {request.allottedSection} • Officer: {request.assignedOfficer}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Received {format(new Date(request.receivedAt), 'dd MMM yyyy, hh:mm a')}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className={`${statusStyles[request.status]} capitalize`}>{request.status}</Badge>
                  <Button variant="outline">
                    <CheckCircle2 className="w-4 h-4 mr-2" />
                    Accept FIR
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              All FIRs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>FIR No.</TableHead>
                  <TableHead>Station</TableHead>
                  <TableHead>Section</TableHead>
                  <TableHead>Date Filed</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockFirs.map((fir) => (
                  <TableRow key={fir.id}>
                    <TableCell className="font-medium">{fir.firNumber}</TableCell>
                    <TableCell>{fir.policeStation}</TableCell>
                    <TableCell>{fir.sectionIpc}</TableCell>
                    <TableCell>{format(new Date(fir.dateFiled), 'dd MMM yyyy')}</TableCell>
                    <TableCell>
                      <Badge className={`${firStatusStyles[fir.status]} capitalize`}>{fir.status}</Badge>
                    </TableCell>
                    <TableCell>
                      <Button asChild variant="link" className="px-0">
                        <Link to={`/fir/${fir.id}`}>View</Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default FirManagement;
