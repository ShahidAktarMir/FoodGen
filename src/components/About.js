import React, { useState } from "react";
const Section = ({ title, des, isV, setIsv, setH }) => {
  return (
    <div className="border border-x-red-500  hover:border-y-green-500 hover:border-x-red-100 p-10 m-5 transition-all duration-200 ease-in-out rounded-md bg-slate-100">
      <p className="text-xl font-medium">{title}</p>
      {isV && (
        <p className="visible hover:invisible duration-1000 transition-all ease-in-out">
          {des}
        </p>
      )}
      {!isV ? (
        <button
          onClick={() => {
            setIsv();
          }}
          className="bg-stone-700 h-7 w-16 text-center text-white rounded-md text-xs mt-5 hover:bg-stone-800 transition-all duration-200 ease-in-out"
        >
          Show
        </button>
      ) : (
        <button
          onClick={() => {
            setH();
          }}
          className="bg-stone-700 h-7 w-16  text-white rounded-md text-xs mt-5 hover:bg-stone-800 transition-all duration-200 ease-in-out"
        >
          Hide
        </button>
      )}
    </div>
  );
};
const About = () => {
  const [sectionConfigs, setSectionConfigs] = useState("Null");
  return (
    <>
      <Section
        title="About Us"
        des="Our mission is to organize the world’s information and make it universally accessible and useful."
        isV={sectionConfigs == "About"}
        setIsv={() => {
          setSectionConfigs("About");
        }}
        setH={() => {
          setSectionConfigs("Null");
        }}
      />
      <Section
        title="Products"
        des="Make life easier with a little help from our products. It can be imagined that my close intimacy with
        Sherlock Holmes had interested me deeply in crime,
        and that after his disappearance I never failed to
        read with care the various problems which came
        before the public, and I even attempted more than
        once for my own private satisfaction to employ his
        methods in their solution, though with indifferent
        success. There was none, however, which appealed
        to me like this tragedy of Ronald Adair. As I read
        the evidence at the inquest, which led up to a verdict of wilful murder against some person or persons unknown, I realized more clearly than I had
        ever done the loss which the community had sustained by the death of Sherlock Holmes. There were
        points about this strange business which would, I
        was sure, have specially appealed to him, and the
        efforts of the police would have been supplemented,
        or more probably anticipated, by the trained observation and the alert mind of the first criminal agent
        in Europe. All day as I drove upon my round I
        turned over the case in my mind, and found no
        explanation which appeared to me to be adequate.
        At the risk of telling a twice-told tale I will recapitulate the facts as they were known to the public at
        the conclusion of the inquest.
        "
        isV={sectionConfigs == "Pro"}
        setIsv={() => {
          setSectionConfigs("Pro");
        }}
        setH={() => {
          setSectionConfigs("Null");
        }}
      />
      <Section
        title="Team"
        des="Committed to significantly improving the lives of as many people as possible. The Honourable Ronald Adair was the second
        son of the Earl of Maynooth, at that time Governor
        of one of the Australian Colonies. Adair’s mother
        had returned from Australia to undergo the operation for cataract, and she, her son Ronald, and her
        daughter Hilda were living together at 427, Park
        Lane. The youth moved in the best society, had, so
        far as was known, no enemies, and no particular
        vices. He had been engaged to Miss Edith Woodley,
        of Carstairs, but the engagement had been broken
        off by mutual consent some months before, and
        there was no sign that it had left any very profound feeling behind it. For the rest the man’s life
        moved in a narrow and conventional circle, for his
        habits were quiet and his nature unemotional. Yet
        it was upon this easy-going young aristocrat that
        death came in most strange and unexpected form
        between the hours of ten and eleven-twenty on the
        night of March 30, 1894."
        isV={sectionConfigs == "Team"}
        setIsv={() => {
          setSectionConfigs("Team");
        }}
        setH={() => {
          setSectionConfigs("Null");
        }}
      />
    </>
  );
};

export default About;
