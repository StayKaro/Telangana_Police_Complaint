import { Fir, FirStatusHistory } from '@/data/mockFirData';
import { CheckCircle2, Circle, Clock, FileText } from 'lucide-react';
import { format } from 'date-fns';

interface StatusTimelineProps {
  fir: Fir;
  statusHistory: FirStatusHistory[];
}

const statusSteps = [
  { status: 'filed', label: 'Filed', icon: FileText },
  { status: 'ongoing', label: 'Ongoing', icon: Clock },
  { status: 'closed', label: 'Closed', icon: CheckCircle2 },
] as const;

export function StatusTimeline({ fir, statusHistory }: StatusTimelineProps) {
  const getStatusDate = (status: string) => {
    const history = statusHistory.find(h => h.status === status);
    return history ? format(new Date(history.changedAt), 'dd MMM yyyy, HH:mm') : null;
  };

  const getStatusNotes = (status: string) => {
    const history = statusHistory.find(h => h.status === status);
    return history?.notes;
  };

  const isStatusReached = (status: string) => {
    const statusOrder = ['filed', 'ongoing', 'closed'];
    const currentIndex = statusOrder.indexOf(fir.status);
    const checkIndex = statusOrder.indexOf(status);
    return checkIndex <= currentIndex;
  };

  const isCurrentStatus = (status: string) => {
    return fir.status === status;
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between">
        {statusSteps.map((step, index) => {
          const reached = isStatusReached(step.status);
          const current = isCurrentStatus(step.status);
          const Icon = step.icon;
          const date = getStatusDate(step.status);
          const notes = getStatusNotes(step.status);

          return (
            <div key={step.status} className="flex flex-col items-center flex-1 relative">
              {/* Connector line */}
              {index > 0 && (
                <div
                  className={`absolute top-5 right-1/2 w-full h-1 -z-10 ${
                    reached ? 'bg-primary' : 'bg-border'
                  }`}
                />
              )}
              
              {/* Status circle */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  current
                    ? 'bg-primary text-primary-foreground ring-4 ring-primary/20'
                    : reached
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                {reached ? <Icon className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
              </div>

              {/* Label and date */}
              <div className="mt-3 text-center">
                <p
                  className={`font-semibold text-sm ${
                    current ? 'text-primary' : reached ? 'text-foreground' : 'text-muted-foreground'
                  }`}
                >
                  {step.label}
                </p>
                {date && (
                  <p className="text-xs text-muted-foreground mt-1">{date}</p>
                )}
                {notes && (
                  <p className="text-xs text-muted-foreground italic mt-1 max-w-32">{notes}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
