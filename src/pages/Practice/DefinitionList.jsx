<<<<<<< HEAD
import ConditionalDisplay from "./parts/ConditionalDisplay";
import ConditionalRendering from "./parts/ConditionalRendering";
import DisplayingData from "./parts/DisplayingData";
import RenderingLists from "./parts/RenderingLists";
import { imageType, isShowReactImage, statusMessage } from "./parts/data";

function DefinitionList() {
  const renderList = ({ reverse = false } = {}) => {
    console.log(reverse);
=======
import ConditionalDisplay from './parts/ConditionalDisplay';
import ConditionalRendering from './parts/ConditionalRendering';
import DisplayingData from './parts/DisplayingData';
import RenderingLists from './parts/RenderingLists';
import { imageType, isShowReactImage, statusMessage } from './parts/data';

function DefinitionList() {
  const renderList = ({ reverse = false } = {}) => {
>>>>>>> 99329f3bbc9177a496b3e732c8bbd4c74d5c1944
    const renderListItem = (message) => <li key={message}>{message}</li>;
    return (!reverse ? statusMessage : statusMessage.toReversed()).map(
      renderListItem
    );
  };

  const allHidden = false;

  return (
    <dl className="descriptionList">
      <DisplayingData hidden={allHidden} statusMessage={statusMessage} />
      <ConditionalRendering hidden={allHidden} imageType={imageType} />
      <ConditionalDisplay
        hidden={allHidden}
        isShowReactImage={isShowReactImage}
      />
      <RenderingLists statusMessage={statusMessage} renderList={renderList} />
    </dl>
  );
}

export default DefinitionList;
