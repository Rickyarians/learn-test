import React from 'react';
import { Layout } from 'app/components';

import { HeaderSetting, FooterSetting } from 'app/components/pages/setting';

const SettingScr = () => {
  return (
    <Layout>
      <HeaderSetting title="Pengaturan" />
      <FooterSetting />
    </Layout>
  );
};

export default SettingScr;
