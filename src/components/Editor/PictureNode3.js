import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';
import factory from './factory_fin.png';

const handleStyle = { left: 10 };

function PictureNode3({ data, isConnectable }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="text-updater-node">
      <Handle 
      type="target" 
      position={Position.left} 
      isConnectable={isConnectable} 
      />
      <div>
        <label htmlFor="text" class="text-center"> Tags: factory, construction </label>
            <div>
           <img
        src= {factory}
        style={{ width: "300px" }}
        />
          </div>
      </div>
      {/* <Handle
        type="source"
        position={Position.right}
        id="a"
        style={handleStyle}
        isConnectable={isConnectable}
      />
      <Handle type="source" position={Position.Bottom} id="b" isConnectable={isConnectable} /> */}
    </div>
  );
}

export default PictureNode3;