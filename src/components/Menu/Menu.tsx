import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Menu.css";

// Interface para itens do menu
interface MenuItem {
  id: string;
  name: string;
  icon: string;
  url?: string;
  expanded?: boolean;
  children?: MenuItem[];
}

// Interface para o item de projeto
interface ProjectItem {
  name: string;
  icon: string;
  url: string;
}

const Menu: React.FC = () => {
  const navigate = useNavigate();
  const [itemAtivo, setItemAtivo] = useState<string | null>(null);

  // Estado inicial dos itens do menu
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    {
      id: "home",
      name: "Home",
      icon: "fas fa-home",
      url: "/",
    },
    {
      id: "2",
      name: "Dashboard",
      icon: "fas fa-tachometer-alt",
      expanded: false,
      children: [
        {
          id: "2-3",
          name: "Formulários de Validação",
          icon: "fas fa-check-circle",
          url: "/dashboard/formularios",
        },
        {
          id: "2-1",
          name: "Gráficos",
          icon: "fas fa-chart-line",
          url: "/dashboard/graficos",
        },
        {
          id: "2-2",
          name: "Telas",
          icon: "fas fa-desktop",
          url: "/dashboard/telas",
        },
      ],
    },
    {
      id: "1",
      name: "Componentes",
      icon: "fas fa-puzzle-piece",
      expanded: false,
      children: [
        {
          id: "1-1",
          name: "Avatar",
          icon: "fas fa-user",
          url: "/components/avatar",
        },
        {
          id: "1-8",
          name: "Breadcrumb",
          icon: "fas fa-book",
          url: "/components/breadcrumb",
        },
        {
          id: "1-2",
          name: "Button",
          icon: "fas fa-hand-pointer",
          url: "/components/button",
        },
        {
          id: "1-5",
          name: "Checkbox",
          icon: "fas fa-check-square",
          url: "/components/checkbox",
        },
        {
          id: "1-9",
          name: "Checkgroup",
          icon: "fas fa-toggle-on",
          url: "/components/checkgroup",
        },
        {
          id: "1-10",
          name: "Collapse",
          icon: "fas fa-angle-down",
          url: "/components/collapse",
        },
        {
          id: "1-11",
          name: "Divider",
          icon: "fas fa-minus",
          url: "/components/divider",
        },
        {
          id: "1-12",
          name: "Dropdown",
          icon: "fas fa-caret-down",
          url: "/components/dropdown",
        },
        {
          id: "1-21",
          name: "Formulário",
          icon: "fas fa-edit",
          url: "/components/formularios",
        },
        {
          id: "1-13",
          name: "Icon",
          icon: "fas fa-icons",
          url: "/components/icon",
        },
        {
          id: "1-3",
          name: "Input",
          icon: "fas fa-keyboard",
          url: "/components/input",
        },
        {
          id: "1-14",
          name: "Item",
          icon: "fas fa-list",
          url: "/components/item",
        },
        {
          id: "1-15",
          name: "List",
          icon: "fas fa-list-alt",
          url: "/components/list",
        },
        {
          id: "1-16",
          name: "Loading",
          icon: "fas fa-spinner",
          url: "/components/loading",
        },
        {
          id: "1-7",
          name: "Message",
          icon: "fas fa-envelope",
          url: "/components/message",
        },
        {
          id: "1-6",
          name: "Radio",
          icon: "fas fa-dot-circle",
          url: "/components/radio",
        },
        {
          id: "1-4",
          name: "Select",
          icon: "fas fa-caret-square-down",
          url: "/components/select",
        },
        {
          id: "1-17",
          name: "Switch",
          icon: "fas fa-toggle-on",
          url: "/components/switch",
        },
        { id: "1-18", name: "Tag", icon: "fas fa-tag", url: "/components/tag" },
        {
          id: "1-19",
          name: "TextArea",
          icon: "fas fa-pencil-alt",
          url: "/components/textarea",
        },
        {
          id: "1-20",
          name: "Upload",
          icon: "fas fa-upload",
          url: "/components/upload",
        },
      ],
    },
    {
      id: "cores",
      name: "Cores",
      icon: "fas fa-palette",
      url: "/colors",
    },
  ]);

  const project: ProjectItem = {
    name: "Sobre o Projeto",
    icon: "fas fa-info-circle",
    url: "/about",
  };

  // Alternar a visibilidade da pasta
  const toggleFolder = (id: string) => {
    setMenuItems(
      menuItems.map((item) => ({
        ...item,
        expanded: item.id === id ? !item.expanded : false,
      }))
    );
  };

  // Navegar para a URL e definir o item ativo
  const navigateTo = (url: string, id: string) => {
    setItemAtivo(id);
    navigate(url);
  };

  // Lidar com eventos de teclado para acessibilidade
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLAnchorElement>,
    callback: () => void
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      callback();
    }
  };

  return (
    <div className="menu-body" role="tree">
      {/* Renderizando cada seção (pasta ou item simples) */}
      {menuItems.map((folder) => (
        <div
          key={folder.id}
          className={`menu-folder drop-menu ${folder.expanded ? "active" : ""}`}
        >
          {/* Item sem submenu */}
          {!folder.children || folder.children.length === 0 ? (
            <a
              href="#"
              className={`menu-item ${
                itemAtivo === folder.id && !folder.expanded ? "active" : ""
              }`}
              role="treeitem"
              tabIndex={0}
              aria-level={1}
              aria-current={itemAtivo === folder.id ? "true" : undefined}
              onClick={(e) => {
                e.preventDefault();
                if (folder.url) navigateTo(folder.url, folder.id);
              }}
              onKeyDown={(e) => {
                handleKeyDown(e, () => {
                  if (folder.url) navigateTo(folder.url, folder.id);
                });
              }}
            >
              <span className="icon">
                <i className={folder.icon} aria-hidden="true"></i>
              </span>
              <span className="content">{folder.name}</span>
            </a>
          ) : (
            // Item com submenu (pasta)
            <>
              <a
                href="#"
                className={`menu-item ${
                  itemAtivo === folder.id && !folder.expanded ? "active" : ""
                }`}
                role="treeitem"
                tabIndex={0}
                aria-expanded={folder.expanded ? "true" : "false"}
                aria-level={1}
                onClick={(e) => {
                  e.preventDefault();
                  toggleFolder(folder.id);
                }}
                onKeyDown={(e) => {
                  handleKeyDown(e, () => toggleFolder(folder.id));
                }}
              >
                <span className="icon">
                  <i className={folder.icon} aria-hidden="true"></i>
                </span>
                <span className="content">{folder.name}</span>
                <span className="support">
                  <i className="fas fa-chevron-down" aria-hidden="true"></i>
                </span>
              </a>

              <ul
                className={`list-hide ${folder.expanded ? "show" : ""}`}
                role="group"
                aria-hidden={!folder.expanded}
                style={{ display: folder.expanded ? "block" : "none" }}
              >
                {folder.children.map((child) => (
                  <li key={child.id}>
                    <a
                      href="#"
                      className={`menu-item ${
                        itemAtivo === child.id ? "active" : ""
                      }`}
                      role="treeitem"
                      tabIndex={0}
                      aria-level={2}
                      aria-current={itemAtivo === child.id ? "true" : undefined}
                      onClick={(e) => {
                        e.preventDefault();
                        if (child.url) navigateTo(child.url, child.id);
                      }}
                      onKeyDown={(e) => {
                        handleKeyDown(e, () => {
                          if (child.url) navigateTo(child.url, child.id);
                        });
                      }}
                    >
                      <span className="icon">
                        <i className={child.icon} aria-hidden="true"></i>
                      </span>
                      <span className="content">{child.name}</span>
                    </a>

                    {/* Subitens (terceiro nível) */}
                    {child.children && (
                      <ul role="group">
                        {child.children.map((sub) => (
                          <li key={sub.id}>
                            <a
                              href="#"
                              className={`menu-item ${
                                itemAtivo === sub.id ? "active" : ""
                              }`}
                              role="treeitem"
                              tabIndex={0}
                              aria-level={3}
                              aria-current={
                                itemAtivo === sub.id ? "true" : undefined
                              }
                              onClick={(e) => {
                                e.preventDefault();
                                if (sub.url) navigateTo(sub.url, sub.id);
                              }}
                              onKeyDown={(e) => {
                                handleKeyDown(e, () => {
                                  if (sub.url) navigateTo(sub.url, sub.id);
                                });
                              }}
                            >
                              <span className="icon">
                                <i className={sub.icon} aria-hidden="true"></i>
                              </span>
                              <span className="content">{sub.name}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      ))}

      {/* Link complementar fora dos grupos principais */}
      <a
        className={`menu-item divider ${
          itemAtivo === "project" ? "active" : ""
        }`}
        href="#"
        role="treeitem"
        tabIndex={0}
        aria-level={1}
        aria-current={itemAtivo === "project" ? "true" : undefined}
        onClick={(e) => {
          e.preventDefault();
          navigateTo(project.url, "project");
        }}
        onKeyDown={(e) => {
          handleKeyDown(e, () => navigateTo(project.url, "project"));
        }}
      >
        <span className="icon">
          <i className={project.icon} aria-hidden="true"></i>
        </span>
        <span className="content">{project.name}</span>
      </a>
    </div>
  );
};

export default Menu;
