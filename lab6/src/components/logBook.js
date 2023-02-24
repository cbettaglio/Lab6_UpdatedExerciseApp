export default function LogBook({ logbook }) {
  let format = logbook.map((logbook, index) => <p key={index}>{logbook}</p>);
  return (
    <>
      <spam>{format}</spam>
    </>
  );
}
