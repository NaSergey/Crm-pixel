import Title  from "../components/layout/Title";

function Main() {
    return (
      <div className="flex flex-col h-full  ">
          <Title title="Приложение" />
            <div className="mt-2 grid gap-4">
                <table className="w-full mt-2 border border-[#F44900]">
                  <tr className="bg-panel h-[50px] bg-[#ff42001a]">
                      <th className="text-white pl-2 text-left">
                          <input type="text" placeholder="Найти приложение"  className="w-full text-white text-base font-semibold bg-transparent outline-none focus:outline-none" />
                      </th>
                      <th className="text-white text-left">
                          <input type="text" placeholder="Ключевые слова"  className=" text-white text-base font-semibold bg-transparent outline-none focus:outline-none" />
                      </th>
                      <th className="text-white text-left">Google play</th>
                      <th className="text-white text-left">Страны</th>
                      <th className="text-white text-left">Прогресс</th>
                      <th className="text-white text-left">Статус</th>
                      <th className="text-white text-left">Действия</th>
                  </tr>
                    <tbody className="  bg-[#67554E]">
                        <tr className=" ">
                            <td className="text-white p-2 ">
                                {/* <img className="rounded-lg" src={images.miniApkLogo} alt="App Logo" /> */}
                                <p className="text-white pl-2">Rizz: Reality Dating Show</p>
                            </td>
                            <td className="text-white">Мое Приложение</td>
                            <td className="text-white">Мое Приложение</td>
                            <td className="text-white">Органический</td>
                            <td className="text-white">Россия</td>
                            <td className="text-white">Активен</td>
                            <td className="text-white">100$</td>
                        </tr>
                        <tr className="  bg-[#62514a] ">
                            <td className="text-white p-2   ">
                                <p className="text-white pl-2">Rizz: Reality Dating Show</p>
                            </td>
                            <td className="text-white">Мое Приложение</td>
                            <td className="text-white">Мое Приложение</td>
                            <td className="text-white">Органический</td>
                            <td className="text-white">Россия</td>
                            <td className="text-white">Активен</td>
                            <td className="text-white">100$</td>
                        </tr>
                        <tr className=" ">
                            <td className="text-white p-2   ">
                                <p className="text-white pl-2">Rizz: Reality Dating Show</p>
                            </td>
                            <td className="text-white">Мое Приложение</td>
                            <td className="text-white">Мое Приложение</td>
                            <td className="text-white">Органический</td>
                            <td className="text-white">Россия</td>
                            <td className="text-white">Активен</td>
                            <td className="text-white">100$</td>
                        </tr>
                    </tbody>
                </table>
            </div>
      </div>
    );
  }
  
  export default Main;
  