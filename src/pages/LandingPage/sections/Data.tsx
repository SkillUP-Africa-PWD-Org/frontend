import { ProblemStatement } from "../../../assets/Images";

const Data = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 m-10">
      <img src={ProblemStatement} alt="problem-statement image" />
      <div className="flex flex-col gap-8">
        <h1 className="text-7xl font-bold text-white">
          Problem <span className="text-primary">Statement</span>
        </h1>
        <p className="text-white">
          In Kenya, a significant population of people with disabilities (PWD),
          estimated at over 900,000 individuals, faces profound barriers in
          accessing vocational education. Despite making up 2.2% of the
          population, many PWD, particularly those who are intellectually
          challenged, mobility-challenged, or deaf, struggle to find training
          programs that accommodate their unique needs. Most existing vocational
          training opportunities are not designed with accessibility in mind,
          leaving these individuals without the necessary skills to thrive in
          the workforce.
        </p>
      </div>
    </div>
  );
};

export default Data;
