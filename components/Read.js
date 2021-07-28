import Link from 'next/link';
import Image from 'next/image';
import slugify from 'slugify';
import TimeAgo from 'timeago-react';
import * as timeago from 'timeago.js';

import Rating from '@/components/Rating';
import id from 'timeago.js/lib/lang/id_ID';

export default function Read({ book, featured, className }) {
  const slug = slugify(book.name, { lower: true });

  timeago.register('id', id);

  return (
    <Link href={`/${slug}`}>
      <a
        className={`rounded-lg hover:-translate-y-1 transition duration-500 focus:outline-none focus-visible:ring ${className}`}
      >
        {featured && (
          <section className="relative">
            <Image
              src={book.thumbnail[0].url}
              alt={book.name}
              width={765}
              height={500}
              layout="responsive"
              objectFit="cover"
              className="rounded-t-lg"
            />
            <div className="absolute z-10 -bottom-3 left-3 px-1 py-0.5 bg-white border border-gray-50 rounded">
              <Rating
                rating={book.rating}
                className="text-base font-medium md:text-sm"
              />
            </div>
          </section>
        )}
        <section
          className={`h-[7.7rem] p-3 border border-gray-200/75 relative overflow-hidden bg-white ${
            featured ? 'rounded-b-lg' : 'rounded-lg'
          }`}
        >
          {!featured && (
            <div className="rotate-[40deg] absolute -bottom-20 -right-20 w-32 h-32 transform">
              <Image
                src={book.thumbnail[0].url}
                alt={book.name}
                width={768 / 2}
                height={500 / 2}
                layout="responsive"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
          )}
          <div className="flex flex-col justify-between h-full">
            <div className="text-base md:text-sm">
              <p className="mb-1 mt-1.5 font-medium leading-tight">
                {book.author}
              </p>
              <span className="link-custom text-gray-600">{book.name}</span>
            </div>
            <div className="space-y-1">
              <TimeAgo
                datetime={book.date}
                locale="id"
                className="text-gray-500 text-base md:text-xs"
              />
            </div>
          </div>
        </section>
      </a>
    </Link>
  );
}
