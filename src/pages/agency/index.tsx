import MainLayout from '../../layouts/main';
import { Tab, Tabs } from '@mui/material';
import { Block } from '../../sections/_examples/Block';
import { useState } from 'react';
import Iconify from '../../components/iconify';
import { TabPanel, TabContext, TabList } from '@mui/lab';
import SortingSelecting from '../../sections/_examples/mui/table/sorting-selecting';

const XAgency = () => {
  const [currentTab, setCurrentTab] = useState('one');
  const TABS = [
    {
      value: 'one',
      icon: <Iconify icon="eva:file-text-fill" width={24} />,
      label: 'Jobs',
    },
    {
      value: 'two',
      icon: <Iconify icon="eva:person-done-fill" width={24} />,
      label: 'Verification',
    },
    {
      value: 'three',
      icon: <Iconify icon="eva:award-fill" width={24} />,
      label: 'Governance',
    },
    {
      value: 'four',
      icon: <Iconify icon="eva:person-fill" width={24} />,
      label: 'Profile',
    },
  ];

  const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': { mx: '8px !important' },
  } as const;
  return (
    <>
      <TabContext value={currentTab}>
        <Block sx={style}>
          <TabList onChange={(event, newValue) => setCurrentTab(newValue)}>
            {TABS.slice(0, 4).map((tab) => (
              <Tab
                iconPosition="bottom"
                key={tab.value}
                icon={tab.icon}
                label={tab.label}
                value={tab.value}
              />
            ))}
          </TabList>
        </Block>
        <Block>
          <TabPanel value={'one'}>
            <SortingSelecting />
          </TabPanel>
          <TabPanel value={'two'}>Item Two</TabPanel>
          <TabPanel value={'three'}>Item Three</TabPanel>
          <TabPanel value={'four'}>Item Four</TabPanel>
        </Block>
      </TabContext>
    </>
  );
};

XAgency.getLayout = (page: React.ReactElement) => <MainLayout> {page} </MainLayout>;

export default XAgency;
