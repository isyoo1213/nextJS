import { useRouter } from 'next/router'

//our-domain.com/news/newsIds

const DetailPage = () => {
  const router = useRouter();

  const newsId = console.log(router.query.newsId);
  {/* 라우터는 최초 렌더링때 즉시 실행되어 undefined가 뜸 - 이때는 URL이 무엇인지 모름
      >> 이후 해당 정보가 들어오면 컴포넌트가 재렌더링 될 때 구체적인 값을 가져옴  */}

  // send a request to the backend API
  // to fetch the news item with newsId
  
  {/* newsId에 undefined가 할당됨 */}

  return <h1>{`${newsId} Page`}</h1>
}

export default DetailPage;