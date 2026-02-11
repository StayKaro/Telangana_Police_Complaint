import { FirNote } from '@/data/mockFirData';
import { Card, CardContent } from '@/components/ui/card';
import { format } from 'date-fns';
import { MessageSquare, User, Clock } from 'lucide-react';

interface CaseNotesProps {
  notes: FirNote[];
}

export function CaseNotes({ notes }: CaseNotesProps) {
  if (notes.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        <MessageSquare className="w-12 h-12 mx-auto mb-3 opacity-50" />
        <p>No case notes available</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {notes.map((note, index) => (
        <Card key={note.id} className="relative">
          {/* Timeline connector */}
          {index < notes.length - 1 && (
            <div className="absolute left-6 top-full w-0.5 h-4 bg-border" />
          )}
          
          <CardContent className="pt-4">
            <div className="flex items-start gap-4">
              {/* Timeline dot */}
              <div className="w-3 h-3 rounded-full bg-primary mt-1.5 flex-shrink-0" />
              
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-4 mb-2">
                  <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <User className="w-4 h-4 text-muted-foreground" />
                    {note.officerName}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {format(new Date(note.createdAt), 'dd MMM yyyy, HH:mm')}
                  </div>
                </div>
                <p className="text-sm text-foreground/80">{note.noteContent}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
