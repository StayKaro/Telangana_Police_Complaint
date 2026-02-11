import { FirColumn } from './FirColumn';
import { getFirsByStatus } from '@/data/mockFirData';

export function FirStatusBoard() {
  const filedFirs = getFirsByStatus('filed');
  const ongoingFirs = getFirsByStatus('ongoing');
  const closedFirs = getFirsByStatus('closed');

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <FirColumn title="Filed FIRs" status="filed" firs={filedFirs} />
      <FirColumn title="Ongoing FIRs" status="ongoing" firs={ongoingFirs} />
      <FirColumn title="Closed FIRs" status="closed" firs={closedFirs} />
    </div>
  );
}
