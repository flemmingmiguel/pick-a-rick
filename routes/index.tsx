import { createSignal, lazy, Suspense } from "solid-js";
import { client } from "~/utils/urql/client.ts";
import { For } from "solid-js/web";
import { ARick, Rickton } from "../components/rickton.tsx";
// export const Rickton = () => {
//   return (
//     <>
//       <div class="bg-white text-black ">
//         H
//       </div>
//     </>
//   );
// };

// export const ARick = ({ data }) => {
//   return (
//     <>
//       <div>
//         <For each={data}>
//           {(x) => x.name}
//         </For>
//         <Rickton />
//       </div>
//     </>
//   );
// };

export function ButtonCool() {
  return (
    <>
      <button
        onclick={() => setCount(count() + 1)}
        class="rounded-full bg-white text-gray-400 font-semibold px-4 py-2"
      >
        is this a button????
      </button>
    </>
  );
}

const ricks = () =>
  client.query(
    `{
      characters(filter: {name: "rick"},page:4) {
        results {
          name
          image
          location {
            name
          }
        }
      }
    }`,
    {},
  )
    .toPromise().then((x) => x);

const fgh = await ricks();

// export const ARick = ({ data }) => {
//   return (
//     <>
//       <div>
//         <For each={data}>
//           {(x) => x.name}
//         </For>
//         <Rickton />
//         dfgdg
//       </div>
//     </>
//   );
// };
const [count, setCount] = createSignal(0);

export default function App() {
  return (
    <>
      <div
        onclick={() => setCount(count() + 1)}
        class="h-screen w-screen text-white text-8xl font-black text-center pt-40 justify-center items-center bg-gray-600 flex-rows "
      >
        <div>
          this is the pick-a-rick finally
        </div>
        <ButtonCool />
        <div>{count()}h</div>
        <div>creating a meta-framework</div>
        <div>
          <div class="bg-gray-500 h-full font-black text-white text-4xl  flex items-center justify-center flex-col">
            <Suspense>
              <ARick data={fgh.data.characters.results} />
            </Suspense>
          </div>
          {/* <PickaRick /> */}
        </div>
      </div>
    </>
  );
}
