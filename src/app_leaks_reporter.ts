import Config from './config';
import pre from './app/pre';
import actions from './app/actions';
import back from './app/back';
import {Page} from "puppeteer";

export = {
    action: async (page: Page) => await actions(page),
    back: async (page: Page) => await back(page),
    url: () => Config.test_url,
    beforeInitialPageLoad: async (page: Page) => await pre(page),
    repeat: () => Config.tests_count
};