'use client';
import Image from 'next/image';
export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Community</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://linktr.ee/omochisol"
              className="opacity-60 hover:opacity-100"
            >
              Linktree
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://x.com/omochi_cto"
              className="opacity-60 hover:opacity-100"
            >
              X
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="https://t.me/omochi_cn"
              className="opacity-60 hover:opacity-100"
            >
              Chinese Telegram
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="https://t.me/omochis"
              className="opacity-60 hover:opacity-100"
            >
              English Telegram
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="https://www.instagram.com/tomoflys/"
              className="opacity-60 hover:opacity-100"
            >
              Instagram
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="https://www.tiktok.com/@tomoflys"
              className="opacity-60 hover:opacity-100"
            >
              Tiktok
            </a>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2024 OMOCHI
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://github.com/leoMirandaa"
            className="text-primary transition-all border-primary hover:border-b-2"
          ></a>
        </h3>
      </section>
    </footer>
  );
};
