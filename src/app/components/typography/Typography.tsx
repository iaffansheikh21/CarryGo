import React from "react";
import { Checkbox } from "@nextui-org/react";

const Typography = () => {
  return (
    <>
      <div className="text-left mx-auto w-[60%]">
        <h1 className="text-2xl text-black mb-12">Paragraph</h1>
        <p className="text-base leading-relaxed text-gray-500 text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tellus
          tortor, ultrices venenatis neque ut, commodo congue est. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Vivamus finibus dictum sapien eu tincidunt. Vestibulum
          at arcu vitae magna rhoncus euismod in id eros. Pellentesque ligula
          nibh, rhoncus et ornare vel, dignissim ac est. Aenean eu placerat
          urna, laoreet porta eros. Donec sed elementum orci. Donec molestie eu
          felis eu tempus. Sed vitae orci nunc. Fusce et diam ac nisi bibendum
          pulvinar ut eu justo. Integer pulvinar tempus feugiat. Suspendisse
          ornare interdum blandit. Ut et nulla at est maximus posuere. Phasellus
          vel tortor quis lorem feugiat dictum ac vel odio. Nunc auctor
          ullamcorper mauris, non bibendum lectus fringilla quis.
        </p>
      </div>
      <div className="text-left mx-auto w-[60%] space-y-2">
        <h1 className="text-2xl text-black mt-12 mb-12">
          Inline text elements
        </h1>
        <p className="text-base leading-relaxed text-gray-500 text-left">
          You can use the mark tag to <mark>highlight</mark> text.
        </p>
        <p className="text-base leading-relaxed text-gray-500 text-left">
          <del>This line of text is meant to be treated as deleted text.</del>
        </p>
        <p className="text-base leading-relaxed text-gray-500 text-left">
          <s>This line of text is meant to be treated as no longer accurate.</s>
        </p>
        <p className="text-base leading-relaxed text-gray-500 text-left">
          <ins>
            This line of text is meant to be treated as an addition to the
            document.
          </ins>
        </p>
        <p className="text-base leading-relaxed text-gray-500 text-left">
          <u>This line of text will render as underlined.</u>
        </p>
        <p className="text-sm leading-relaxed text-gray-500 text-left">
          <small>This line of text is meant to be treated as fine print.</small>
        </p>
        <p className="text-base leading-relaxed text-gray-500 text-left">
          <strong>This line rendered as bold text.</strong>
        </p>
        <p className="text-base leading-relaxed text-gray-500 text-left">
          <em>This line rendered as italicized text.</em>
        </p>
      </div>
      <div className="text-2xl text-black mb-12 text-left mt-12 space-y-2 mx-auto w-[60%]">
        <h1 className="text-2xl text-black mt-12 mb-6">Headings</h1>
        <h1 className="text-3xl text-black mb-6 pb-6">h1. heading</h1>
        <h2 className="text-2xl text-black mb-2 pb-8">h2. heading</h2>
        <h3 className="text-xl text-black mb-2 pb-5">h3. heading</h3>
        <h4 className="text-lg text-black mb-2">h4. heading</h4>
        <h5 className="text-base text-black mb-2">h5. heading</h5>
        <h6 className="text-sm text-black mb-2">h6. heading</h6>
      </div>
      <div className="text-left mt-16 mx-auto w-[60%]">
        <h1 className="text-2xl text-black mt-12 mb-6">Blockquote</h1>
        <blockquote className="border-l-4 text-xl border-gray-300 pl-4 italic text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          posuere erat a ante.
        </blockquote>
        <footer className="mt-2 text-gray-500">
          — <cite>Someone famous in Source Title</cite>
        </footer>
      </div>
      <div className="text-left mt-12 mx-auto w-[90%] lg:w-[60%]">
        <h1 className="text-2xl text-black mt-12 mb-6">Lists</h1>
        <div className="flex flex-col lg:flex-row lg:justify-between">
          {/* Styled List */}
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
            <h2 className="text-xl text-gray-500 mb-6">Styled</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-500">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Integer molestie lorem at massa</li>
              <li>Facilisis in pretium nisl aliquet</li>
              <li>
                Nulla volutpat aliquam velit
                <ul className="list-disc list-inside ml-6 space-y-1">
                  <li className="list-none">◦ Phasellus iaculis neque</li>
                  <li className="list-none">◦ Purus sodales ultricies</li>
                  <li className="list-none">
                    ◦ Vestibulum laoreet porttitor sem
                  </li>
                  <li className="list-none">
                    ◦ Ac tristique libero volutpat at
                  </li>
                </ul>
              </li>
              <li>Faucibus porta lacus fringilla vel</li>
              <li>Aenean sit amet erat nunc</li>
              <li>Eget porttitor lorem</li>
            </ul>
          </div>

          {/* Unstyled List */}
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
            <h2 className="text-xl text-black mb-4">Unstyled</h2>
            <ul className="list-none space-y-1 text-gray-500">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Integer molestie lorem at massa</li>
              <li>Facilisis in pretium nisl aliquet</li>
              <li>
                Nulla volutpat aliquam velit
                <ul className="list-none ml-6 space-y-1">
                  <li className="list-none">◦ Phasellus iaculis neque</li>
                  <li className="list-none">◦ Purus sodales ultricies</li>
                  <li className="list-none">
                    ◦ Vestibulum laoreet porttitor sem
                  </li>
                  <li className="list-none">
                    ◦ Ac tristique libero volutpat at
                  </li>
                </ul>
              </li>
              <li>Faucibus porta lacus fringilla vel</li>
              <li>Aenean sit amet erat nunc</li>
              <li>Eget porttitor lorem</li>
            </ul>
          </div>

          {/* Checkboxes List */}
          <div className="w-full lg:w-1/3">
            <h2 className="text-xl text-black mb-4">Checkboxes</h2>
            <ul className="space-y-5 w-full text-gray-500">
              <li className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox text-red-500" />
                <span>Lorem ipsum dolor sit amet</span>
              </li>
              <li className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox text-red-500" />
                <span>Consectetur adipiscing elit</span>
              </li>
              <li className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox text-red-500" />
                <span>Integer molestie lorem at massa</span>
              </li>
              <li className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox text-red-500" />
                <span>Facilisis in pretium nisl aliquet</span>
              </li>
              <li>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="form-checkbox text-red-500"
                  />
                  <span>Nulla volutpat aliquam velit</span>
                </div>
                <ul className="ml-6 mt-2 space-y-2">
                  <li className="flex items-center space-x-2">
                    1.
                    <input
                      type="checkbox"
                      className="form-checkbox text-red-500"
                    />
                    <span>Phasellus iaculis neque</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    2.
                    <input
                      type="checkbox"
                      className="form-checkbox text-red-500"
                    />
                    <span>Purus sodales ultricies</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    3.
                    <input
                      type="checkbox"
                      className="form-checkbox text-red-500"
                    />
                    <span>Vestibulum laoreet porttitor sem</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    4.
                    <input
                      type="checkbox"
                      className="form-checkbox text-red-500"
                    />
                    <span>Ac tristique libero volutpat at</span>
                  </li>
                </ul>
              </li>
              <li className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox text-red-500" />
                <span>Faucibus porta lacus fringilla vel</span>
              </li>
              <li className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox text-red-500" />
                <span>Aenean sit amet erat nunc</span>
              </li>
              <li className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox text-red-500" />
                <span>Eget porttitor lorem</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Typography;
