import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { officers } from '@/data/mockStationData';
import { Users } from 'lucide-react';

const statusStyles = {
  available: 'bg-status-closed text-status-closed-foreground',
  'on-duty': 'bg-status-ongoing text-status-ongoing-foreground',
  'off-duty': 'bg-status-filed text-status-filed-foreground',
};

const Officers = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Officers</h2>
          <p className="text-muted-foreground">
            Directory of officers available in the police station network.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Police Station Officers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Officer</TableHead>
                  <TableHead>Badge No.</TableHead>
                  <TableHead>Position</TableHead>
                  <TableHead>Police Station</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Shift</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {officers.map((officer) => (
                  <TableRow key={officer.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback>
                            {officer.name
                              .split(' ')
                              .slice(0, 2)
                              .map((part) => part[0])
                              .join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-foreground">{officer.name}</p>
                          <p className="text-xs text-muted-foreground">{officer.email}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{officer.badgeNumber}</TableCell>
                    <TableCell>{officer.position}</TableCell>
                    <TableCell>{officer.policeStation}</TableCell>
                    <TableCell>{officer.phone}</TableCell>
                    <TableCell>{officer.shift}</TableCell>
                    <TableCell>
                      <Badge className={`${statusStyles[officer.status]} capitalize`}>{officer.status}</Badge>
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

export default Officers;
