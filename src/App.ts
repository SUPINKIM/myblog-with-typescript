import renderNavigation from './nav/nav';
import './globalStyle.css';

export default function App(): DocumentFragment {
  const fragment = document.createDocumentFragment();

  fragment.appendChild(renderNavigation());
  return fragment;
}
