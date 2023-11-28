"use client";

import { useEffect, useState } from "react";
import { ITag } from "@/lib/qtags";
import { Input } from "@/components/ui/input";
import { Cross, X } from "lucide-react";

export default function TestPage() {
  const [searchText, setSearchText] = useState("");

  const [searchResults, setSearchResults] = useState<ITag[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `/qtags/api?searchText=${encodeURIComponent(searchText)}`
      );
      const data = await res?.json();
      console.log(data, "data");
      const filteredList = data.filter(
        (tag: ITag) => !selectedTags.includes(tag.slug)
      );
      setSearchResults(filteredList);
    })();
  }, [searchText, selectedTags]);

  // function getTopics(event: any) {
  //   console.log(event.target.value);
  //   const value = event.target.value;
  //   setSearchText(value);
  //   // const topics = await getTopicListByTitle(value);
  //   // console.log(topics);
  // }

  function addTag(event: any) {
    console.log("selected addTag is ", event.target.id);
    if (!selectedTags.includes(event.target.id)) {
      setSelectedTags([...selectedTags, event.target.id]);
    }
  }
  function removeTag(event: any) {
    console.log("selected addTag is ", event.target.id);
    const newSelection = selectedTags.filter((tag) => tag !== event.target.id);
    setSelectedTags([...newSelection]);
  }

  return (
    <div className="w-full m-10">
      <ul className="flex flex-wrap">
        {selectedTags.map((tag) => (
          <li
            key={tag}
            className="bg-slate-200 py-2 px-2 mr-2 border rounded-lg flex gap-2 items-center"
          >
            <p>{tag}</p>
            <X
              id={tag}
              className="w-4 h-4 cursor-pointer m-1 text-red-500"
              onClick={(e) => removeTag(e)}
            />
          </li>
        ))}
      </ul>

      <div className="w-full m-10">
        <Input
          type="text"
          onChange={(e) => setSearchText(e.target.value)}
          className="w-1/2"
        />
        <div className="w-1/2 my-1">
          <ul>
            {searchResults.map((result) => (
              <li
                key={result.slug}
                onClick={(e) => addTag(e)}
                id={result.slug}
                className="cursor-pointer bg-slate-100 py-2 px-4"
              >
                {result.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
