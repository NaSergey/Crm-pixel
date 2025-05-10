
import { useState } from "react";

import Title from "../../components/layout/Title";
import Select from "../../components/ui/select/select";
import InputSelect from "../../components/ui/select/InputSelect";
import TextInput from "../../components/ui/select/TextInput.tsx";

const User: React.FC<UserProps> = () => {
    const [project, setProject] = useState("proj-1");
    const [projectName, setProjectName] = useState("");
    const [name, setName] = useState("");
    const suggestions = [
      { label: "CryptoBot", value: "crypto-bot" },
      { label: "Marketing App", value: "marketing-app" },
      { label: "Admin Panel", value: "admin-panel" },
    ];
    const projectOptions = [
      { label: "Проект 1", value: "proj-1" },
      { label: "Проект 2", value: "proj-2" },
      { label: "Проект 3", value: "proj-3" },
    ];
  
  return (
    <div className="flex flex-col h-full">
      <Title title="Приложение" />
      <div className="mt-2 grid gap-4 bg-[#62514a] border-[#F44900]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col bg-[#62514a] border-[#F44900]">
            <div className="flex flex-col gap-4 p-4 bg-[#62514a] border-[#F44900]">
              <div className="text-2xl font-semibold text-white">Пользователь</div>
              <div className="text-lg text-gray-300">Имя: </div>
              <div className="text-lg text-gray-300">Email: </div>
                <Select
                    label="Выберите проект"
                    options={projectOptions}
                    value={project}
                    onChange={(val) => setProject(val)}
                />
                <InputSelect
                    label="Название проекта"
                    options={suggestions}
                    value={projectName}
                    onChange={(val) => setProjectName(val)}
                />
                <TextInput
                    label="Имя проекта"
                    value={name}
                    onChange={setName}
                    placeholder="Введите имя"
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
