import styled from "styled-components";
import {
  Tab as UnstyledTab,
  TabList as UnstyledTabList,
  Tabs as UnstyledTabs,
  TabPanel as UnstyledTabPanel,
} from "react-tabs";
import { Color } from "ui";
import { BodyText1, BodyText2 } from "ui/typography";

const Tabs = styled(UnstyledTabs)`
  background: transparent;
` as any;

const TabList = styled(UnstyledTabList)`
  display: flex;
  padding: 0;
  margin-bottom: 49px;
` as any;

const Tab = styled(UnstyledTab).attrs({
  selectedClassName: "selected",
  disabledClassName: "disabled",
})`
  flex-grow: 1;
  text-align: center;
  padding: 12px 0;
  list-style: none;

  border-bottom: 1px solid #e7e7e7;

  ${BodyText2};
  color: ${Color.Secondary_lightGrey};
  cursor: pointer;

  &:first-child {
    border-left: none;
  }

  &.selected {
    ${BodyText1}
    border-bottom: 2px solid ${Color.Primary};
    &:hover {
      background: ${Color.Orange};
    }
  }

  &.disabled {
    color: #e0e0e0;
    cursor: not-allowed;
  }
` as any;

const TabPanel = styled(UnstyledTabPanel).attrs({ selectedClassName: "selected" })`
  display: none;
  padding: 10px 20px;
  &.selected {
    display: block;
  }
` as any;

Tab.tabsRole = "Tab";
Tabs.tabsRole = "Tabs";
TabPanel.tabsRole = "TabPanel";
TabList.tabsRole = "TabList";

export { Tab, TabList, Tabs, TabPanel };
