import React from "react";
import Image from "next/image";
import styles from "./style.module.scss";

type Props = {
  area: string;
};

const MapComponent = (props: Props) => {
  const areaSymbol = props.area !== "none" ? props.area.split("-")[0] : "none";
  const imagePath = `/1x/map_area${areaSymbol}.png`;

  return (
    <div className={styles.container}>
      {areaSymbol !== "none" ? (
        <p className={styles.reward}>ポイント40%UPスポット出現!</p>
      ) : (
        <p className={styles.basic}>探索マップ</p>
      )}
      <div className={styles.image}>
        {areaSymbol !== "none" ? (
          <Image src={imagePath} alt="map" width={250} height={250} />
        ) : (
          <Image src="/1x/map_area0.png" alt="map" width={250} height={250} />
        )}
      </div>
    </div>
  );
};

export default MapComponent;
