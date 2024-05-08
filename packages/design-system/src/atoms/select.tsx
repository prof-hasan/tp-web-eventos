import { cn } from "../utils";



export const Select: React.FC = () => {
  return (
    <div>
    <select
      id="location"
      name="location"
      className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
      defaultValue="Canada"
    >
      <option>United States</option>
      <option>Canada</option>
      <option>Mexico</option>
    </select>
  </div>
  )
}