import { Layout } from '@/components/layout/Layout';
import { FirStatusBoard } from '@/components/fir/FirStatusBoard';

const Index = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground">FIR Dashboard</h2>
          <p className="text-muted-foreground">Overview of all First Information Reports by status</p>
        </div>
        <FirStatusBoard />
      </div>
    </Layout>
  );
};

export default Index;
