import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Fir } from '@/data/mockFirData';
import { format } from 'date-fns';
import { FileText, Calendar } from 'lucide-react';

interface FirCardProps {
  fir: Fir;
}

export function FirCard({ fir }: FirCardProps) {
  return (
    <Link to={`/fir/${fir.id}`}>
      <Card className="cursor-pointer hover:shadow-md transition-shadow border-l-4 border-l-transparent hover:border-l-primary">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-semibold flex items-center gap-2">
            <FileText className="w-4 h-4 text-muted-foreground" />
            {fir.firNumber}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Calendar className="w-3 h-3" />
            <span>{format(new Date(fir.dateFiled), 'dd MMM yyyy')}</span>
          </div>
          <Badge variant="outline" className="text-xs">
            {fir.sectionIpc}
          </Badge>
          <p className="text-sm text-foreground/80 line-clamp-2">
            {fir.incidentDescription}
          </p>
          <p className="text-xs text-muted-foreground">
            {fir.policeStation}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
