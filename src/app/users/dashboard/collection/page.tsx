import Header from "@/components/Dashboard/Header";
import { getAnimes } from "@/libs/api-libs";
import { authUserSection } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = async () => {
  const user = await authUserSection();
  const collection = await prisma.collection.findMany({
    where: { user_email: user?.email },
  });

  return (
    <section className="mt-4 px-4 w-full">
      <Header title="My Collection" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {collection.map((collect) => {
          return (
            <Link
              href={`/anime/${collect.anime_mal_id}`}
              className="relative "
              key={collect.id}
            >
              <Image
                className="w-full"
                src={collect.anime_image}
                alt=""
                width={150}
                height={150}
              />
              <div className="absolute bottom-0 w-full bg-primary h-16 flex justify-center items-center">
                <h5 className="text-xl text-white text-center font-bold">
                  {collect.anime_title}
                </h5>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Page;
