import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Welcome !</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo animi
        dolores nihil quis sunt reiciendis numquam tempora eos corrupti
        voluptatem.
      </p>
      <Link href="/about">Visit about about</Link>
    </>
  );
}
