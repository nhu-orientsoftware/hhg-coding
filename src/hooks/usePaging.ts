import { useCallback, useState } from 'react';

function usePaging(limit = 5) {
  const [paging, setPaging] = useState({
    page: 1,
    limit: 5
  });
  const goToFirstPage = useCallback(() => {
    setPaging({
      page: 1,
      limit
    });
  }, [limit]);
  const onPaging = useCallback((page) => {
    setPaging({
      page,
      limit
    });
  }, [limit]);

  return {
    paging,
    onPaging,
    goToFirstPage
  };
}

export default usePaging;
