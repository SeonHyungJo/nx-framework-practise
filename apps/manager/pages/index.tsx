import dynamic from "next/dynamic";
import styled from '@emotion/styled';

const Lib1 = dynamic(
  () => import("@nx-framework-practise/lib1").then((mod) => mod.Lib1),
  {ssr: false, loading: () => <p>Loading...</p>}
)

const Lib2 = dynamic(
  () => import("@nx-framework-practise/lib2").then((mod) => mod.Lib2),
  {ssr: false, loading: () => <p>Loading...</p>}
)

const Lib3 = dynamic(
  () => import("@nx-framework-practise/lib3").then((mod) => mod.Lib3),
  {ssr: false, loading: () => <p>Loading...</p>}
)

const Lib4 = dynamic(
  () => import("@nx-framework-practise/lib4").then((mod) => mod.Lib4),
  {ssr: false, loading: () => <p>Loading...</p>}
)

const Lib4_1 = dynamic(
  () => import("@nx-framework-practise/lib4").then((mod) => mod.Lib4_1),
  {ssr: false, loading: () => <p>Loading...</p>}
)


const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.@emotion/styled file.
   */
  return (
    <StyledPage>
      <Lib1/>
      <Lib2/>
      <Lib3/>
      <Lib4/>
      <Lib4_1/>
    </StyledPage>
  );
}

export default Index;
