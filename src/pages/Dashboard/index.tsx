import { useCallback, useState } from 'react';
import { Button } from 'antd';

function Dashboard() {
  const [number, setNumber] = useState<number>(0);
  const handlePlus = useCallback(() => { setNumber(number + 1); }, [number]);
  const handleReset = useCallback(() => { setNumber(0); }, []);
  return (
    <div className="dashboard">
      <h3 data-testid="dashboard-number">{number}</h3>
      <Button type="primary" onClick={handlePlus}>
        plus 1
      </Button>
      <Button onClick={handleReset}>
        reset
      </Button>
    </div>
  );
}

export default Dashboard;
