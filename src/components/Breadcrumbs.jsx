import { Link } from 'react-router-dom';
import { Icon } from './Icons';

export default function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs">
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={item.path} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            {i > 0 && (
              <span className="crumb-sep" aria-hidden="true">
                <Icon name="chevronDown" />
              </span>
            )}
            {isLast ? (
              <span aria-current="page">{item.name}</span>
            ) : (
              <Link to={item.path}>{item.name}</Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
