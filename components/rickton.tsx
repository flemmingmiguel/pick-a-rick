import { For } from "solid-js/web";

export const Rickton = () => {
  return (
    <>
      <div class="bg-white text-black ">
        H
      </div>
    </>
  );
};

export const ARick = ({ data }) => {
  return (
    <>
      <div class="flex flex-wrap items-center mx-auto">
        <For each={data}>
          {(x) => (
            <>
              <div class="w-full max-w-sm bg-white m-4 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 ">
                <a href="#">
                  <img
                    class="p-8 rounded-t-lg"
                    src={x.image}
                    alt="product image"
                  />
                </a>
                <div class="px-5 pb-5">
                  <a href="#">
                    <h5 class="text-2xl font-black tracking-tight text-gray-900 dark:text-white">
                      {x.name}
                    </h5>
                  </a>
                </div>
              </div>
            </>
          )}
        </For>
      </div>
    </>
  );
};
