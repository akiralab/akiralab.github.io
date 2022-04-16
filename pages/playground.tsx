import type { NextPage } from 'next';
import Link from 'next/link';

import Layout from '../components/layout';
import CustomButton from './playground/CustomButton';
import CustomForm from './playground/CustomForm';

const Home: NextPage = () => {
 return (
  <Layout>
   <h3 className="ui header">Reactの基本要素を勉強していく</h3>
   <h3 className="ui header">1. useState</h3>
   <div className="ui message">
    ReactのuseStateを使ってボタンを押すとカウントアップ、カウントダウン、カウントリセットするコンポーネントを作成する
   </div>
   <CustomButton />
   <h3 className="ui header">2. useEffect</h3>
   <div className="ui message">ReactのuseEffectを使って</div>
   <CustomForm />
  </Layout>
 );
};

export default Home;
