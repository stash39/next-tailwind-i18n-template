import PropTypes, { InferProps } from 'prop-types';
import { useTranslation } from 'next-i18next';

import Menu from './Menu';
import LocaleSwitcher from './LocaleSwitcher';

function Layout({
  children,
}: InferProps<typeof Layout.propTypes>) {
  const { t } = useTranslation('common');

  return (
    <div className="flex min-h-screen flex-col">
      <nav className="flex flex-row justify-between bg-black p-4 text-white">
        <Menu />
        <LocaleSwitcher />
      </nav>

      <main className="flex-1 p-4">{children}</main>

      <footer className="bg-black p-4 text-white">{t('footer')}</footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
