import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import logo from "/public/images/logo.png";

export const metadata: Metadata = {
  title: "포켓몬에 관하여",
  description: "포켓몬이란 뭘까요?",
};

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">포켓몬의 역사</h1>
      <div className="border min-w-40 text-center p-4">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">포켓몬스터란?</h2>
          <p className="mb-4">
            포켓몬스터(ポケットモンスター, Pokémon)는 일본의 게임프리크와
            크리처스가 개발하고 닌텐도가 발매한 RPG 시리즈입니다. 포켓몬스터
            시리즈는 처음 1996년에 일본에서 출시되었으며, 이후 전 세계적으로 큰
            인기를 끌게 되었습니다.
          </p>
          <Image
            src={logo}
            alt="Pokeball"
            width={200}
            height={200}
            className="mx-auto mb-4"
          />
        </div>

        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">게임 시리즈의 발전</h2>
          <p className="mb-4">
            포켓몬스터 시리즈는 다양한 플랫폼을 통해 발전해왔습니다.
            게임보이에서 시작하여, 현재는 닌텐도 스위치까지 다양한 기기에서
            플레이할 수 있습니다. 각 세대마다 새로운 포켓몬, 기술, 게임
            메커니즘이 추가되며 지속적으로 확장되고 있습니다.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">문화적 영향</h2>
          <p className="mb-4">
            포켓몬스터는 게임뿐만 아니라 애니메이션, 영화, 카드 게임 등 다양한
            매체로 확장되었습니다. 특히, 애니메이션 시리즈는 전 세계적으로
            사랑받으며, 많은 팬층을 형성하고 있습니다.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">참고 자료</h2>
          <p>
            더 자세한 내용은{" "}
            <a
              href="https://namu.wiki/w/%ED%8F%AC%EC%BC%93%EB%AA%AC%EC%8A%A4%ED%84%B0(%ED%8F%AC%EC%BC%93%EB%AA%AC%EC%8A%A4%ED%84%B0)"
              className="text-blue-500 hover:underline"
            >
              나무위키 포켓몬스터
            </a>{" "}
            페이지를 참고하세요.
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <Link
          href="/"
          className="text-center border-2 border-purple-400 bg-cyan-800 hover:bg-sky-400 text-white p-2 rounded"
        >
          뒤로가기
        </Link>
      </div>
    </div>
  );
};

export default About;
