
import Create from "./Component/Create";
import style from "./home.module.css";

export default function Home() {
  return (
    <div className={style.app}>
      <div className={style.container}>
        <Create />
      </div>
    </div>
  );
}
