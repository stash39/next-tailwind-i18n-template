import { useRouter } from 'next/router';
import Link from 'next/link';

function LocaleSwitcher() {
  const { locales, asPath } = useRouter();

  return (
    <ul className="flex flex-row gap-4">
      {locales?.map((locale) => (
        <li key={locale}>
          <Link href={asPath} locale={locale}>
            {locale}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default LocaleSwitcher;
