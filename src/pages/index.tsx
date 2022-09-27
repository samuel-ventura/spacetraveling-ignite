import { GetStaticProps } from 'next';

import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';



interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home({ postsPagination }: HomeProps): JSX.Element {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.mainContent}>
          <a href="/post/">
            <h2>Como utilizar hooks</h2>
            <p>Pensando em sincronização em vez de ciclos de vida.</p>
          </a>
          <div>
            <img src="/images/calendar.svg" alt="Calendário" />
            <span>15 mar 2021</span>
            <img src="/images/user.svg" alt="Ícone de Pessoa" />
            <a href="https://instagram.com/osamuelventura">
              <span>Samuel Ventura</span>
            </a>
          </div>
        </div>
        <div className={styles.mainContent}>
          <a href="/post">
            <h2>Como utilizar hooks</h2>
            <p>Pensando em sincronização em vez de ciclos de vida.</p>
          </a>
          <div>
            <img src="/images/calendar.svg" alt="Calendário" />
            <span>15 mar 2021</span>
            <img src="/images/user.svg" alt="Ícone de Pessoa" />
            <a href="https://instagram.com/osamuelventura">
              <span>Samuel Ventura</span>
            </a>
          </div>
        </div>
        <div className={styles.mainContent}>
          <button className={styles.button} type="button">Carregue mais posts</button>
        </div>
      </div>
    </>
  )
}

// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient({});
//   // const postsResponse = await prismic.getByType(TODO);

//   // TODO
// };
