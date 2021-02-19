import { gaEvent } from "@atlas-ui/ga";
// Below, custom events. All call gaEvent.
// Exported to be called by onClick, etc. in components
// Idea is to see all of the custom events in one place with their categories, actions, and labels
// Split into separate files (maybe by category?) if the number of these becomes unwieldy

export const gaEvent_ExternalLink = ({ name }) => {
  gaEvent({
    category: "External Link",
    action: "click",
    label: name,
  });
};
