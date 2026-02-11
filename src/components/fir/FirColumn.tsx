import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FirCard } from './FirCard';
import { Fir, FirStatus } from '@/data/mockFirData';
import { FileText, Clock, CheckCircle2 } from 'lucide-react';

interface FirColumnProps {
  title: string;
  status: FirStatus;
  firs: Fir[];
}

const statusConfig = {
  filed: {
    icon: FileText,
    bgClass: 'bg-status-filed',
    textClass: 'text-status-filed-foreground',
  },
  ongoing: {
    icon: Clock,
    bgClass: 'bg-status-ongoing',
    textClass: 'text-status-ongoing-foreground',
  },
  closed: {
    icon: CheckCircle2,
    bgClass: 'bg-status-closed',
    textClass: 'text-status-closed-foreground',
  },
};

export function FirColumn({ title, status, firs }: FirColumnProps) {
  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <Card className="flex flex-col h-full">
      <CardHeader className={`${config.bgClass} ${config.textClass} rounded-t-lg`}>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <Icon className="w-5 h-5" />
            {title}
          </span>
          <Badge variant="secondary" className="bg-white/20 text-inherit hover:bg-white/30">
            {firs.length}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 p-4 space-y-3 overflow-y-auto max-h-[calc(100vh-400px)]">
        {firs.length === 0 ? (
          <p className="text-center text-muted-foreground py-8">No FIRs in this category</p>
        ) : (
          firs.map((fir) => <FirCard key={fir.id} fir={fir} />)
        )}
      </CardContent>
    </Card>
  );
}
