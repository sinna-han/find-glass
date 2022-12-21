import React from "react";
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from "react-naver-maps";
export default function Map() {
  return (
    <RenderAfterNavermapsLoaded // Render후 Navermap로드
      ncpClientId={"ozpd58o06p"} // 자신의 네이버 계정에서 발급받은 Client ID
      error={<p>Maps Load Error</p>}
      loading={<p>Maps Loading...</p>}
    >
      <NaverMap
        id='react-naver-maps'
        style={{ width: "100%", height: "280px" }}
        center={{ lat: 37.199618, lng: 126.938728 }}
      >
        <Marker
          key={1}
          position={{ lat: 37.199618, lng: 126.938728 }}
          animation={2}
        />
      </NaverMap>
    </RenderAfterNavermapsLoaded>
  );
}
