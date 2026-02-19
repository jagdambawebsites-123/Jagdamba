import ButtonPrimary from "./ButtonPrimary";

export default function AboutUs() {
  return (
    <div
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(0,0,0,0.65), rgba(52,52,52,0)),
          linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0)),
          url('/images/landingPage/heroImage.png')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
      className="flex flex-col justify-center px-25"
    >
      <div className="w-fit flex flex-col gap-12">
        <h1>
          Building Tomorrow's <br /> Infrastructure
        </h1>
        <div className="h-1 w-full bg-[#CA9015]"></div>
        <ButtonPrimary content={"About Us"} />
      </div>
    </div>
  );
}
