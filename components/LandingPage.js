import RenderSections from "./RenderSections";

function LandingPage({ page = {} }) {
  const { content = [] } = page;
  return <RenderSections sections={content} />;
}

export default LandingPage;
