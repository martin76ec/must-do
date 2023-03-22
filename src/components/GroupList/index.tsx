import { GroupAdd } from "@components/GroupAdd";

function Group() {
  return (
    <div className='bg-white w-full h-64 rounded-lg'>
    </div>
  );
}

function GroupList() {
  return (
    <div className='flex flex-col gap-10 px-10'>
      <div className='grid grid-cols-2 overflow-y-auto max-h-[70vh] gap-10'>
        <Group />
        <Group />
        <Group />
        <Group />
        <Group />
        <Group />
        <Group />
      </div>
      <GroupAdd />
    </div>
  );
}

export { GroupList };
