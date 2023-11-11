const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="md:w-3/12 mx-auto text-center my-8">
            <p className="text-[#D99904] italic mb-4">---{subHeading}---</p>
            <h2 className="uppercase  text-2xl border-y-2 border-[#E8E8E8] py-4">{heading}</h2>
        </div>
    );
};

export default SectionTitle;