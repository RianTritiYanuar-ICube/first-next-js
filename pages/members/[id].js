/**
 * 1. Get all data
 * 2. Mapping it
 * 3. When the app being build, will build the pages with the total data
 *
 */
export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((member) => {
    return {
      params: { id: member.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

/**
 * Get the params via context
 * And then get one single data based on the params
 *
 */
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { member: data },
  };
};

const Detail = ({ member }) => {
  return (
    <div>
      <h3>{member.name}</h3>
      <p>{member.email}</p>
      <p>{member.website}</p>
      <p>{member.address.city}</p>
    </div>
  );
};

export default Detail;
