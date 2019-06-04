import withData from './container/navigation-data-provider';
import WebNavigation from './stateless/WebNavigation';

const WebNavigationWithData = withData(WebNavigation);

export default WebNavigationWithData;
