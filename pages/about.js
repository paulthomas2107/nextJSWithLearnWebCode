import Link from 'next/link';

export default function About() {
  return (
    <>
      <h1>The About Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo animi
        dolores nihil quis sunt reiciendis numquam tempora eos corrupti
        voluptatem.
      </p>
      <Link href="/">Back to start...</Link>
    </>
  );
}
