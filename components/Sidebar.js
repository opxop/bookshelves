import Avatar from '@/components/icons/Avatar';
import ProgressBar from '@/components/ProgressBar';
import ThemeChanger from '@/components/ThemeChanger';

import { CAPTION, NAME } from '@/utils/constant';
import { currentPage, totalPage, wasRead } from '@/utils/count-pages-books';

export default function Sidebar({ data }) {
  const _totalPage = totalPage(data);
  const _currentPage = currentPage(data);
  const _wasRead = wasRead(data);

  return (
    <aside className="h-[95vh] min-w-[255px] border-gray-100/90 fixed bottom-5 left-5 top-5 hidden dark:bg-primary-dark bg-white border dark:border-gray-700 rounded-3xl md:block">
      <div className="flex flex-col px-6 h-full">
        <div className="flex flex-col items-center my-5 text-center">
          <Avatar />
          <h1 className="mb-1 mt-5 text-lg font-medium">{NAME}</h1>
          <h2 className="relative w-3/4 dark:text-gray-400 text-gray-500 text-sm italic">
            {CAPTION}
          </h2>
        </div>
        <div className="flex flex-col justify-between mt-14 h-full">
          <section className="space-y-8">
            <div className="space-y-1">
              <h2 className="dark:text-gray-400 text-gray-500 text-sm">Buku</h2>
              <div className="flex items-center justify-between">
                <h3 className="w-20 text-2xl font-bold tracking-tighter">
                  {data.length}
                </h3>
                <ProgressBar
                  current={_wasRead}
                  total={data.length}
                  color="#FE8957"
                  height={8}
                />
              </div>
            </div>
            <div className="space-y-1">
              <h2 className="dark:text-gray-400 text-gray-500 text-sm">
                Halaman
              </h2>
              <div className="flex items-center justify-between">
                <h3 className="inline-flex items-center w-20 text-2xl font-bold tracking-tighter">
                  {_totalPage.toString().slice(0, 1)}K{' '}
                  <span className="text-[16px] font-normal">++</span>
                </h3>
                <ProgressBar
                  current={_currentPage}
                  total={_totalPage}
                  color="#FECA07"
                  height={8}
                />
              </div>
            </div>
          </section>
          <section className="mb-3 mx-auto">
            <ThemeChanger />
          </section>
        </div>
      </div>
    </aside>
  );
}
